---
title: List.Alternate
---

# List.Alternate


## Description

Restituisce un elenco formato da tutti gli elementi con offset dispari di un elenco.


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

Restituisce un elenco formato da tutti gli elementi con offset dispari di un elenco. Accetta e ignora i valori dell'elenco <code>list</code> a seconda dei parametri.    <ul>    <li><code>count</code>: specifica il numero di valori che vengono ignorati ogni volta.</li>    <li><code>repeatInterval</code>: un intervallo di ripetizione facoltativo per indicare quanti valori vengono aggiunti tra i valori ignorati.</li>    <li><code>offset</code>: parametro di offset di opzione per iniziare a ignorare i valori in corrispondenza dell'offset iniziale.</li>    </ul>


## Examples

### Example #1 
Creare un elenco da \{1..10} che ignori il primo numero.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
Creare un elenco da \{1..10} che ignori un numero sì e uno no.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
Creare un elenco da \{1..10} che inizia in corrispondenza di 1 e ignora un numero sì e uno no.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
Creare un elenco da \{1..10} che inizia in corrispondenza di 1, salta un valore, mantiene due valori e così via.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
