import matplotlib.pyplot as plt 
sizes = [20, 30, 25, 25] 
labels = ['Category 1', 'Category 2', 'Category 3', 'Category 4'] 
plt.pie(sizes, labels=labels, autopct='%1.1f%%', colors=['gold', 'lightcoral', 'lightskyblue', 'yellowgreen']) 
plt.title('Simple Pie Chart') 
plt.show() 
