---
title: List.Alternate
---

# List.Alternate


## Description

Повертає список, що складається з усіх непарних елементів зсуву у списку.


## Syntax

```powerquery
List.Alternate(
    list as list,
    count as number,
    optional repeatInterval as number,
    optional offset as number
) as list
```


## Details

Повертає список, що складається з усіх непарних елементів зсуву у списку. Приймає або пропускає значення зі списку <code>list</code> залежно від параметрів.    <ul>    <li><code>count</code>: Вказує кількість значень, які щоразу пропускаються.</li>    <li><code>repeatInterval</code>: Додатковий інтервал повтору, щоб указати, скільки значень додано між пропущеними значеннями.</li>    <li><code>offset</code>: Додатковий параметр зсуву, щоб почати пропускати значення на початковому зсуві.</li>    </ul>


## Examples

### Example #1 
Створити список \{1..10}, який пропускає перше число.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
Створює список на основі множини \{1..10}, який пропускає всі інші числа.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
Створити список \{1..10}, який починається з 1 і пропускає всі інші числа.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
Створює список на основі множини \{1..10}, який починається з 1, пропускає одне значення, зберігає два значення й т. д.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
