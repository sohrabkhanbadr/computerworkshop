import plotly.graph_objects as go 
fig = go.Figure(data=go.Scatter(x=[1, 2, 3, 4], y=[10, 15, 13, 17], mode='lines+markers')) 
fig.update_layout(title='Simple Line Chart with Plotly', xaxis_title='X-axis', yaxis_title='Y-axis') 
fig.show() 
