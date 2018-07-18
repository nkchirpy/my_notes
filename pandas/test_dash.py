import dash
from dash.dependencies import Input, Output
import dash_core_components as dcc
import dash_html_components as html

app = dash.Dash()

app.layout = html.Div(children=[
                    html.H1("Hi Dash there..!"),
                    dcc.Graph(id='vp_port',
                        figure={
                            'data':[{'x':[1,2,3,4,5,6],'y':[7,5,7,5,6,2],'type':'line','name':'boats'},
                                    {'x':[1,2,3,4,5,6],'y':[5,6,2,7,5,7],'type':'bar','name':'cars'}],
                            'layout':{
                                    'title':'Basic Dash Example'
                            }
                        }
                        )
                    ])

if __name__ == '__main__':
    app.run_server(debug=True)
