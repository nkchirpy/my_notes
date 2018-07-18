ssh username@serveraddress -p portnumber

ssh ubuntu@rajaserver01.go.dyndns.org -p 2233

	uK@A56S#$

CREATE ROLE odoo11 LOGIN ENCRYPTED PASSWORD 'odoo11' SUPERUSER INHERIT CREATEDB CREATEROLE NOREPLICATION;
CREATE ROLE ubuntu LOGIN ENCRYPTED PASSWORD 'admin' SUPERUSER INHERIT CREATEDB CREATEROLE NOREPLICATION;

alter database odoo11 owner to "bapps_kathrein_dev";



copy the file rsync --progress -avz -e "ssh -p 7822" developer@rajaserver01.go.dyndns.org:/var/lib/postgresql/bapps190617.dump


/***********************/
createdb db_name -O owner_name

restore db:psql esco_db</home/pinnacleseven023/Downloads/PDF/alamy_2018-04-23_14-34-29/dump.sql
	psql p72018</opt/dbbackup/P72018.dump


alter database esco_db owner to "pinnacleseven023";

alter user bapps_internal_erp_tes with superuser;



/***********************/



to start the container

docker start a00bad663d90


get into docker postgres

docker exec -it 05648f67e31b bash

su postgres

psql



/*******************/
docker build -t bapps/demo:v9.0 .

docker-compose run web openerp-server -u pinnacle_supports_service -d test_muratec	
/******************/
(muratec_service_db) 
 

/********************/
to remove exited container 

docker rm $(docker ps -q -f 'status=exited')





get into server

ssh developer@rajaserver01.go.dyndns.org -p 7822

Deve|0per!2#

screen ls

screen -x id

to exit - ctrl+a+d

to switch - ctrl+a+p

create window ctrl + a + c


"host": "rajaserver01.go.dyndns.org",
    "user": "developer",
    "password": "Deve|0per!2#",
    "port": "7822",
    
    "remote_path": "/opt/odoo/"


internal erp


"type": "sftp",

    "sync_down_on_open": true,
    "sync_same_age": true,
    
    "host": "rajaserver01.go.dyndns.org",
    "user": "ubuntu",
    "password": "uK@A56S#$",
    "port": "2233",
    
    "remote_path": "/opt/odoo/pinnacle_erp_test/"


grep -rn --include="*.py" "stock.incoterms"

select opt_id, name from calendar_event where name='Odoo Implementation';



rsync -avz -e  "ssh -p 2233" ubuntu@rajaserver01.go.dyndns.org:/opt/dbbackup/2018.dump /home/pinnacleseven023/Desktop/2018.dump

sudo docker cp /home/chirpy/Desktop/P72018.dump f655eaac94a7:/run/postgresql

docker cp f655eaac94a7:/run/postgresql/erp3.dump /home/chirpy/Desktop/erp3.dump


['|',('user_id','=',user.id),('project_assistance','in',[user.id])]


sudo git clone https://www.github.com/odoo/odoo --depth 1 --branch 11.0


ssh ubuntu@rajaserver01.go.dyndns.org -p 2227

	OD00^U!|T123

/bapps-arch/bapps-tech/projects/bapp_bappsdemo9/addons



odoo9_demo_erp

https://dineshkumar@gitlab.pinnacleseven.com/kathiresan.p7/odoo9-ce.git
Dinesh211095


401, First Floor, Noble Business Centre, Near Lakshmi Mills Stop, Avinashi Road, P N Palayam, P N Palayam, Coimbatore, Tamil Nadu 	




SEMNOX

ssh ubuntu@rajaserver01.go.dyndns.org -p 2229


rajaserver01.go.dyndns.org
           user: ubuntu
           port: 2229
           password: B@pP5!|D#E




Live Instance: http://128.199.229.113:8089/web?debug#view_type=kanban&model=oeh.medical.dashboard&menu_id=299&action=435

Username: admin
Password: MyAdmin

Source code: 
https://www.dropbox.com/sh/kiwpe6j2s45cu7y/AAC4FQljUaYEO6QamziteIj0a?dl=0
https://www.dropbox.com/sh/8xorctslkiankph/AACLVMdIH3QQVCq-FV2uCe2wa?dl=0









 In oeHealth > Surgeries > Surgeries menu -> Surgery Nurses should not have access to create/add new partners and partners duplication should also be restricted
Another user called Super User should be created having access rights as same as Admin user by excluding the below listed menus
Domiciliary Units
o Vaccines
o Call Log
o My Profile
o Register for Walk-ins
o Revised Cardiac Risk
o Ophthalmology
o Neglected Tropical Diseases
o Ambulatory Cares
To build value field for fetching the duration for Hours, Days, Weeks and Years



http://ec2-18-220-231-23.us-east-2.compute.amazonaws.com






conn = psycopg2.connect(database="dcf", user = "postgres", password = "DC*f54rE@1", host = "127.0.0.1", port = "5432")








conn = psycopg2.connect(database="dcf", user = "postgres", password = "DC*f54rE@1", host = "ec2-18-205-117-11.compute-1.amazonaws.com", port = "5432")