def is_anagram(first_string, second_string):
    if len(first_string) != len(second_string):
        return False

    array1 = list(first_string)
    array2 = list(second_string)

    if quicksort(array1) == quicksort(array2):
        return True
    else:
        return False


def quicksort(array):
    if len(array) < 2:
        return array
    else:
        pivo = array[0]
        menores = [i for i in array[1:] if i <= pivo]
        maiores = [i for i in array[1:] if i > pivo]
        return quicksort(menores) + [pivo] + quicksort(maiores)

# Honestidade Acadêmica: Livro Entendendo Algoritmos, página 83
