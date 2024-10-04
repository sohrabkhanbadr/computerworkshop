import seaborn as sns 
import matplotlib.pyplot as plt 

data = [7, 8, 9, 4, 3, 6, 5, 10, 11, 12] 



sns.boxplot(data=data, color='cyan') 
plt.title('Simple Box Plot') 
plt.show() 
