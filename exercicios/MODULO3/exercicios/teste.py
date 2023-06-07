import random 

a1 = input("Digite o primeiro nome: ")
a2 = input("Digite o segungo nome: ")
a3 = input("Digite o terceiro nome: ")
a4 = input("Digite o quarto nome: ")
list_aluno = [a1, a2, a3, a4]
s1 = random.choice(list_aluno)
print(s1)
