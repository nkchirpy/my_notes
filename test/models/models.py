# -*- coding: utf-8 -*-

from odoo import models, fields, api
import base64
from lxml import etree,objectify
try:
    from StringIO import StringIO
except ImportError:
    from io import StringIO

from lxml import html

class test(models.Model):
    _name = 'test.test'

    name = fields.Char()
    value = fields.Integer()
    value2 = fields.Float()
    description = fields.Text()

    

    
    def prettify(self,someXML):
        #for more on lxml/XSLT see: http://lxml.de/xpathxslt.html#xslt-result-objects
        xslt_tree = etree.XML('''\
            <!-- XSLT taken from Comment 4 by Michael Kay found here:
            http://www.dpawson.co.uk/xsl/sect2/pretty.html#d8621e19 -->
            <xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
            <xsl:output method="xml" indent="yes" encoding="UTF-8"/>
            <xsl:strip-space elements="*"/>
            <xsl:template match="/">
                <xsl:copy-of select="."/>
            </xsl:template>
            </xsl:stylesheet>''')
        transform = etree.XSLT(xslt_tree)
        result = transform(someXML)
        return result

    
    
    @api.multi
    def test_button(self):
        dummy_file = open("test.xml","w")

        # HEADERS DECLARATION
        auditfile = etree.Element("Auditfile")
        header = etree.Element("header")
        comp_name = self.env['res.company'].search_read([],['id','name'])
        for keys,values in comp_name[0].items():
            etree.SubElement(header,keys.title().replace("_","")).text = str(values)
        
        company_address = etree.Element("CompanyAddress")
        master_file = etree.Element("Masterfile")
        customer = etree.Element("Customer")
        cus = self.env['res.partner'].search_read([],['id','vat'])
        for keys,values in cus[0].items():
            etree.SubElement(customer,keys.title().replace("_","")).text = str(values)

        c_billing_address = etree.Element("BillingAddress")
        ship_to_address = etree.Element("ShipToAddress")
        supplier = etree.Element("Supplier")
        s_billing_address = etree.Element("BillingAddress")
        ship_from_address = etree.Element("ShipFromAddress")
        product = etree.Element("Product")
        source_document = etree.Element("SourceDocument")
        movement_of_goods = etree.Element("MovementofGoods")
        auditfile.append(header)
        header.append(company_address)
        auditfile.append(master_file)
        master_file.append(customer)
        customer.append(c_billing_address)
        customer.append(ship_to_address)
        master_file.append(supplier)
        supplier.append(s_billing_address)
        supplier.append(ship_from_address)
        # self biil indicator tag has to come here
        master_file.append(product)
        auditfile.append(source_document)
        source_document.append(movement_of_goods)
        # HEADERS DECLARATION END HERE

        
        
        res_company = self.env['res.company'].search_read([],['street', 'city', 'state_id','zip'])
        res_company[0].pop('id')
        for key,val in res_company[0].items():
            etree.SubElement(company_address,key.title().replace("_","")).text=str(val)
        
        cus_add = self.env['res.partner'].search_read([],['type','=','contact','street','city','state_id','zip'])
        cus_add[0].pop('id')
        for i in cus_add:
            for key,val in i.items():
                etree.SubElement(c_billing_address,key.title().replace("_","")).text=str(val)

        
        

        format_it = etree.XML(etree.tostring(auditfile,pretty_print=True,xml_declaration=True))
        send_to_attach = self.prettify(format_it)
        print (send_to_attach)
        err
        dummy_file.write(str(send_to_attach))
        dummy_file.close()
        r = ''
        r = base64.b64encode(open("test.xml","rb").read())

        str(r).replace("\n","")
        attach = self.env['ir.attachment'].create({'name':'test.xml','mimetype':'xml','type':'binary','res_field':'image','datas':r,})
        print (attach)
        

       