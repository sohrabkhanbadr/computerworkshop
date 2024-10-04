import seaborn as sns 
import numpy as np 
import matplotlib.pyplot as plt 
data = np.random.rand(5, 5) 
sns.heatmap(data, annot=True, cmap='coolwarm') 
plt.title('Simple Heatmap') 
plt.show() 
