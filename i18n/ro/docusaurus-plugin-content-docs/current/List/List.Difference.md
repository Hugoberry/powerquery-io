---
title: List.Difference
---

# List.Difference


## Description

Returnează diferenţa dintre cele două liste date.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Returnează elementele din lista <code>list1</code> care nu apar în lista <code>list2</code>. Sunt acceptate valori duplicat.     Poate fi specificată o valoare opțională criteriu de ecuație, <code>equationCriteria</code>, pentru a controla testarea egalității. 


## Examples

### Example #1 
Găsiți elementele din lista \{1, 2, 3, 4, 5} care nu apar în \{4, 5, 3}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Găsiţi elementele din lista \{1, 2} care nu apar în \{1, 2, 3}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
