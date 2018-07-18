import dash_core_components as dcc
import dash
import plotly.graph_objs as go
import dash_html_components as html

app = dash.Dash()

app.layout = html.Div(children=[
                    html.H1("Hi Dash there..!"),
                        dcc.Graph(
                id='sns_pie_1',
                figure={
                  "data": [
                    {
                      "values": "by_sns_platform_1",
                      "labels": ['A', 'B', 'C', 'D', 'E', 'F'],
                      "domain": {"x": [0, .48]},
                      "name": "Published",
                      "hoverinfo":"label+percent+name",
                      "hole": .3,
                      "type": "pie",
                      "marker" : {"colors":'red'}
                    }
                        ]}),dcc.Graph(
                            figure=go.Figure(
                                data=[
                                    go.Bar(
                                        x=[1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003,
                                           2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
                                        y=[219, 146, 112, 127, 124, 180, 236, 207, 236, 263,
                                           350, 430, 474, 526, 488, 537, 500, 439],
                                        name='Rest of world',
                                        marker=go.Marker(
                                            color='rgb(55, 83, 109)'
                                        )
                                    ),
                                    go.Bar(
                                        x=[1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003,
                                           2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
                                        y=[16, 13, 10, 11, 28, 37, 43, 55, 56, 88, 105, 156, 270,
                                           299, 340, 403, 549, 499],
                                        name='China',
                                        marker=go.Marker(
                                            color='rgb(26, 118, 255)'
                                        )
                                    )
                                ],
                                layout=go.Layout(
                                    title='US Export of Plastic Scrap',
                                    showlegend=True,
                                    legend=go.Legend(
                                        x=0,
                                        y=1.0
                                    ),
                                    margin=go.Margin(l=40, r=0, t=40, b=30)
                                )
                            ),
                            style={'height': 300},
                            id='my-graph'
                        ),
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