import seaborn as sns 
import matplotlib.pyplot as plt 
data = sns.load_dataset('tips') 
sns.violinplot(x='day', y='total_bill', data=data) 
plt.title('Simple Violin Plot') 
plt.show() 
