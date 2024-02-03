---
title: List.Sort
---

# List.Sort


## Description

Razvrsti seznam podatkov glede na navedene kriterije.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Details

Razvrstite seznam podatkov, <code>list</code>, glede na navedene izbirne kriterije.    Kot kriterij primerjave lahko določite izbirni parameter <code>comparisonCriteria</code>. Funkcija lahko ima te vrednosti:    <ul>    <li> Kriterij primerjave za nadzor vrstnega reda je lahko vrednost "Order enum". (<code>Order.Descending</code>, <code>Order.Ascending</code>) </li>    <li> Za izračun ključa za razvrščanje lahko uporabite funkcijo z 1 argumentom. </li>     <li> Če želite izbrati ključ in nadzorovati vrstni red, lahko kot kriterij primerjave določite seznam, ki vsebuje ključ in vrstni red (<code>\{each 1 / _, Order.Descending}</code>). </li>    <li> Če želite v celoti nadzorovati primerjavo, lahko uporabite funkcijo z 2 argumentoma. Ta funkcija bo posredovana dvema elementoma s seznama (poljubna dva elementa v poljubem vrstnem redu). Funkcija mora vrniti eno od teh vrednosti:        <ul>            <li> <code>-1</code>: Prvi element je manjši od drugega elementa.</li>            <li> <code>0</code>: Elementi so enaki.</li>            <li> <code>1</code>: Prvi element je večji od drugega elementa.</li>        </ul>       Value.Compare je način, ki ga je mogoče uporabiti za dodeljevanje te logike. </li>    </ul>


## Examples

### Example #1 
Razvrstite seznam \{2, 3, 1}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Razvrstite seznam \{2, 3, 1} v padajočem vrstnem redu.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
Razvrstite seznam \{2, 3, 1} v padajočem vrstnem redu z metodo &#34;Value.Compare&#34;.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
