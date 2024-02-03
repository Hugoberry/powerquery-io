---
title: List.Skip
---

# List.Skip


## Description

Vraća listu koja preskače navedeni broj elemenata na početku liste.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Vraća listu koja preskače prvi element liste <code>list</code>. Ako je lista <code>list</code> prazna, vraća se prazna lista.Ova funkcija uzima opcionalni parametar, <code>countOrCondition</code>, da bi podržala preskakanje više vrednosti navedenih u nastavku.  <ul> <li>Ako se navede broj, preskače se najviše toliko stavki. </li> <li>Ako se navede uslov, vraćena lista počinje prvim elementom iz <code>list</code> koji zadovoljava kriterijume. Ako neka stavka ne zadovolji uslov, kasnije stavke se ne uzimaju u obzir. </li> <li>Ako je ovaj parametar bez vrednosti, primenjuje se podrazumevano ponašanje. </li> </ul>


## Examples

### Example #1 
Kreiranje liste od \{1, 2, 3, 4, 5} bez prva 3 broja.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
Kreira listu od \{5, 4, 2, 6, 1} koja počinje brojem manjim od 3.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
