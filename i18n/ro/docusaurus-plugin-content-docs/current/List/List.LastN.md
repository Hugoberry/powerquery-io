---
title: List.LastN
---

# List.LastN


## Description

Returnează ultima valoare din listă.  Opţional, puteţi specifica numărul de valori de returnat sau o condiţie de calificare.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Details

Returnează ultimul element din lista <code>list</code>. Dacă lista este necompletată, apare o excepție. Această funcție preia un parametru opțional, <code>countOrCondition</code>, pentru a accepta colectarea mai multor elemente sau filtrarea elementelor. <code>countOrCondition</code> poate fi specificat în trei moduri: <ul>  <li>Dacă se specifică un număr, se returnează maximum numărul de elemente respectiv. </li>  <li>Dacă se specifică o condiție, sunt returnate toate elementele care îndeplinesc inițial condiția, începând de la sfârșitul listei. Odată ce un element nu îndeplinește condiția, nu mai sunt luate în considerare elementele ulterioare. </li>  <li>Dacă acest parametru este nul, este returnat ultimul element din listă.</li> </ul>


## Examples

### Example #1 
Aflaţi ultima valoare din lista \{3, 4, 5, -1, 7, 8, 2}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
Găsiţi ultimele valori din lista \{3, 4, 5, -1, 7, 8, 2} care sunt mai mari decât 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
