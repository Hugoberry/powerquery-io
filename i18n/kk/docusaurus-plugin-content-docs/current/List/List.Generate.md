---
title: List.Generate
---

# List.Generate


## Description

Мәндер тізімін жасайды.


## Syntax

```powerquery
List.Generate(
    initial as function,
    condition as function,
    next as function,
    optional selector as function
) as list
```


## Details

Берілген функцияларды пайдаланып мәндер тізімін жасайды. <code>initial</code> функциясы үміткердің бастапқы мәнін жасайды, содан кейін ол <code>condition</code>тексеріледі.    Үміткер мәні бекітілсе, ол қорытынды тізімінің бөлігі ретінде қайтарылады және келесі үміткер мәні жаңадан бекітілген мәнді <code>next</code> тасымалдау арқылы жасалады.    Үміткер мәні <code>condition</code> сәйкес келмегенде, тізім жасау процесі тоқтайды.    Сондай-ақ қорытынды тізіміндегі элементтерді түрлендіру үшін қосымша <code>selector</code> параметрін көрсетуге болады.


## Examples

### Example #1 
Оннан бастап және қайталанатын бір санына кемітуді орындау арқылы тізім жасау. Әрбір элемент нөлден үлкен болуы керек.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
x және y қамтитын жазбалар тізімін жасайды, мұндағы x — мән және y — тізім. x 10 азырақ болып қалуы керек және y тізіміндегі элементтер санын білдіреді. Тізім жасалғаннан кейін тек x мәндерін қайтарады.
```powerquery
List.Generate(
    () => [x = 1, y = {}],
    each [x] < 10,
    each [x = List.Count([y]), y = [y] & {x}],
    each [x]
)
```

Result: 
```powerquery
{1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```




## Category
List.Generators
