from django.db import models
import time
import os
os.system('cls' if os.name == 'nt' else 'clear')


def printtype(data):
    for i in data:
        print(i, type(i))


test = [123, 'Henry', [1, 2, 3], (1, 2, 3), {1, 2, 3}, True, lambda x: x]
# printtype(test)

# defining classes


# class Person:
#     name = 'Barry'
#     age = 44


# # making instance
# person1 = Person()
# person2 = Person()

# # print(person1.name)
# # print(person2.name)

# Person.job = 'teacher'

# # print(person1.job)

# # class attributes ve instance attributes
# Person.name = 'Victor'
# person1.name = 'Rafe'

# person2.salary = 5000
# print(person1.name)
# print(person2.name)
# print(person2.salary)

# # SELF keyword
# class Person:
#     name = 'Barry'
#     age = 44

#     def test(self):
#         print('test')

#     def get_details(self):
#         print('name: ', self.name, 'age: ',
#               self.age, 'location :', self.location)

#     def set_details(self, name, age, location):
#         self.name = name
#         self.age = age
#         self.location = location


# person1 = Person()
# person1.test()
# # Person.test(person1)
# person1.set_details('Henry', 39, 'Ankara')
# person1.get_details()


# def elapsed_time(func):
#     def wrapper():
#         t1 = time.time()
#         func()
#         t2 = time.time()
#         print(f'Elapsed time: {(t2 - t1) * 1000} ms')
#     return wrapper


# @elapsed_time
# def big_sum():
#     num_list = []
#     for num in (range(0, 100000)):
#         num_list.append(num)
#     print(f'Big sum: {sum(num_list)}')


# big_sum()

# Static Method

# class Person:
#     name = 'Barry'
#     age = 44

#     def get_details(self):
#         print('name: ', self.name, 'age: ',
#               self.age, 'location :', self.location)

#     def set_details(self, name, age, location):
#         self.name = name
#         self.age = age
#         self.location = location

#     @staticmethod
#     def salute():
#         print('Hi there! ', Person.name)


# person1 = Person()
# person1.name = 'Henry'
# Person.name = 'Rafe'
# person1.salute()
# Person.salute()

# speacial methods
# class Person:
#     company = 'Clarusway'

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def __str__(self):
#         return f"Name: {self.name} Age: {self.age}"

#     def __len__(self):
#         return self.age


# person1 = Person('Barry', 44)
# person2 = Person('Rafe', 39)
# print(person1.name)

# lst = [1, 2, 3]
# print(len(lst))
# print(len(person1))

# encapsulation and abstraction
# lst = [3, 5, 6, 1, 9, 11]
# lst.sort()
# print(lst)


# class Person:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age
#         self._id = 2000
#         self.__id1 = 5000

#     def __str__(self):
#         return f"Name: {self.name} Age: {self.age}"


# person1 = Person('Barry', 44)
# # print(person1.__id1)
# print(person1._Person__id1)

# # inheritance and polymorphism
# class Person:
#     company = 'Clarusway'

#     def __init__(self, name, age):
#         self.name = name
#         self.age = age

#     def __str__(self):
#         return f"Name: {self.name} Age: {self.age}"

#     def details(self):
#         print(f'Name: {self.name}\nAge: {self.age}')


# class Lang:
#     def __init__(self, langs):
#         self.langs = langs


# class Employee(Person, Lang):
#     def __init__(self, name, age, path, langs):
#         # self.name = name
#         # self.age = age
#         # self.langs = langs
#         super().__init__(name, age)
#         Lang.__init__(self, langs)
#         self.path = path

#     # override
#     def details(self):
#         # print(f'Name: {self.name}\nAge: {self.age}')
#         super().details()
#         print('Path: ', self.path)
#         print('Langs:', self.langs)


# emp = Employee('Barry', 44, 'FS', ['Python', 'JS'])
# # print(emp)
# emp.details()
# print(Employee.mro())

# inner class

# class Article(models.Model):
#     first_name = models.CharField(max_length=30)
#     last_name = models.CharField(max_length=30)

#     # inner class
#     class Meta:
#         ordering = ['last_name']

class Customer:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.movements = []

    def __str__(self):
        return f'Name: {self.name}'

    def add_movements(self, amount, date, explain):
        self.movements.append(
            {'amount': amount, 'date': date, 'explain': explain})

    def all_movements(self):
        for i in self.movements:
            print(i['date'], i['amount'], i['explain'])

    def balance(self):
        # total = 0
        # for i in self.movements:
        #     total += i['amount']
        # return total
        return sum(i['amount'] for i in self.movements)


person1 = Customer('Barry', 44)
person1.add_movements(6000, '1.10.2021', 'salary')
person1.add_movements(-2000, '2.10.2021', 'rent')
person1.add_movements(-1000, '3.10.2021', 'bills')
person1.add_movements(-2000, '5.10.2021', 'credit card')
person1.all_movements()
print(person1.balance())
