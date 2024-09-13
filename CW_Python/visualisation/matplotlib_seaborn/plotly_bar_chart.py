import plotly.express as px 
data = {'Category': ['A', 'B', 'C', 'D'], 'Values': [10, 15, 7, 12]} 
fig = px.bar(data, x='Category', y='Values', title='Simple Interactive Bar Chart') 
fig.show() 
