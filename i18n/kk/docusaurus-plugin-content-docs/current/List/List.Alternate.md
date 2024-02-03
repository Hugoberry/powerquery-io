---
title: List.Alternate
---

# List.Alternate


## Description

Тізімдегі барлық тақ нөмірлі ауытқу элементтерінен тұратын тізімді қайтарады.


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

Тізімдегі барлық тақ нөмірлі ауытқу элементтерінен тұратын тізімді қайтарады. Параметрлерге байланысты <code>list</code> тізімінде мәндерді қабылдау және өткізіп жіберу арасында ауысып отырады.    <ul>    <li><code>count</code>: әр уақытта өткізіп жіберілетін мәндер санын көрсетеді.</li>    <li><code>repeatInterval</code>: өткізіп жіберілген мәндер арасында қанша мән қосылатынын көрсететін міндетті емес қайталау аралығы.</li>    <li><code>offset</code>: бастапқы ауытқуда мәндерді өткізіп жіберуді бастаудың міндетті емес ауытқу параметрі.</li>    </ul>


## Examples

### Example #1 
\{1..10} дегеннен бірінші санды өткізіп жіберетін тізім жасау.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
\{1..10} дегеннен әр екінші санды өткізіп жіберетін тізім жасау.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
\{1..10} дегеннен 1-ден басталатын және әр екінші санды өткізіп жіберетін тізім жасау.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
\{1..10} дегеннен 1-ден басталатын, бір мәнді өткізіп жіберетін, екі мәнді қалдыратын және т.с.с. тізім жасау.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
