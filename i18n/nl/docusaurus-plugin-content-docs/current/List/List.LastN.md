---
title: List.LastN
---

# List.LastN


## Description

Retourneert de laatste waarde uit de lijst.  Hiermee kan worden opgegeven hoeveel waarden er moeten worden geretourneerd of kan een in aanmerking komende voorwaarde worden opgegeven.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Details

Retourneert het laatste item uit de lijst <code>list</code>. Als de lijst leeg is, wordt er een uitzondering gegenereerd. Bij deze functie wordt gebruik gemaakt van een optionele parameter, <code>countOrCondition</code>, als ondersteuning bij het verzamelen van meerdere items of filteritems. <code>countOrCondition</code> kan op drie manieren worden opgegeven: <ul>  <li>Als er een getal wordt opgegeven, wordt er niet meer dan dat aantal items geretourneerd. </li>  <li>Als er een voorwaarde wordt opgegeven, worden te beginnen bij het einde van de lijst alleen die items geretourneerd die in eerste instantie aan die voorwaarde voldoen. Wanneer een item niet aan die voorwaarde voldoet, stopt de bewerking. </li>  <li>Als deze parameter null is, wordt het laatste item uit de lijst geretourneerd.</li> </ul>


## Examples

### Example #1 
De laatste waarde in de lijst \{3, 4, 5, -1, 7, 8, 2} zoeken.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
De laatste waarden in de lijst \{3, 4, 5, -1, 7, 8, 2} opzoeken die groter zijn dan 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
