---
title: List.Modes
---

# List.Modes


## Description

Повертає список найчастіших значень у списку.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Details

Повертає елемент, який найчастіше зустрічається в списку (<code>list</code>). Якщо список пустий, повертається виняткова ситуація. Якщо з тією ж максимальною частотою зустрічається кілька елементів, вибирається останній.    Можна вказати додаткове значення <code>comparisonCriteria</code> (<code>equationCriteria</code>), щоб керувати перевіркою на рівність. 


## Examples

### Example #1 
Знайти елементи, які найчастіше зустрічаються у списку &lt;code&gt;\{&#34;A&#34;, 1, 2, 3, 3, 4, 5, 5}&lt;/code&gt;.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
