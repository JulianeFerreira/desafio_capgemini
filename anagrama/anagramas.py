def groupAnagrams(words):

    anagramsGroup = {}

    for word in words:
        sortedWord = "".join(sorted(word))

        if sortedWord in anagramsGroup:
            anagramsGroup[sortedWord].append(word)
        else: anagramsGroup[sortedWord] = [word]

    return list(anagramsGroup.values())

words = ['aro', 'carro', 'mais', 'ora', 'teste', 'ocrar', 'sima', 'setet', 'misa', 'roa']
print(words)

print(groupAnagrams(words))
