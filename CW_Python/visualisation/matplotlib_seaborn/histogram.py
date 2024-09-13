import matplotlib.pyplot as plt 
import numpy as np 


data = np.random.randn(100) 
plt.hist(data, bins=10, color='purple', alpha=0.7) 


plt.title('Simple Histogram') 
plt.xlabel('Value') 
plt.ylabel('Frequency') 
plt.show() 
