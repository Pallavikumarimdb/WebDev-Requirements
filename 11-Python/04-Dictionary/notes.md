# In this lecture we are discussing about Dictionary:
-- if you want to accessing the data by using key then we are using dictionary

-- Dictionary uses key and value pair

key and value  

### in python 
> data={1:'Navin',2:'kiran',4:'Harsh'} # 1 is key and Navin is value and 2 is key and kiran is value and 4 is key and Harsh is value

## property of dictionary:
-- key must be immutable and unique
   immutable means we can't change the value
   unique means we can't repeat the key 

-- value can be anything

-- we can access the value by using key 

-- we can't access the value by using index

-- we can't access the value by using value


## fetching the value from dictionary
data[4] # we can access the value by using key here key is 4

data[3] # you get error because key is not present in dictionary

### get() method:
-- we can access the value by using get() method

-- if key is present in dictionary then it will return the value

-- if key is not present in dictionary then it will return None

data.get(1) 

data.get(3) # not get  anything 

print(data.get(3)) # it will return None

data.get(1,'Not Found')

data.get(3,'Not Found')

### use of zip() method:
-- we can combine the two list by using zip() method

-- it will return the tuple

keys = ['Navin','Kiran','Harsh']

values=['Python','Java','JS']

### use of dict() method:
-- we can convert the tuple into dictionary by using dict() method
data=dict(zip(keys,values))

data['Kiran']

data['Monika'] # it will give error because key is not present in dictionary

### add the value in dictionary:
data['Monika']='CS'

data

delete the value from dictionary:
del data['Harsh']
 
### Nested Dictionary:
-- we can store the dictionary inside the dictionary

prog={'JS':'Atom','CS':'VS','Python':['Pycharm','Sublime'],'Java':{'JSE':'Netbeans','JEE':'Eclipse'}}

prog

prog['JS']

prog['python'][1]

prog['Java']

prog['Java']['JEE']
