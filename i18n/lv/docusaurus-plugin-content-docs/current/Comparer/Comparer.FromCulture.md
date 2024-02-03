---
title: Comparer.FromCulture
---

# Comparer.FromCulture


## Description

Atgriež salīdzināšanas funkciju atbilstoši norādītajai kultūrai un reģistrjutīgumam.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Details

Atgriež salīdzināšanas funkciju, kas salīdzināšanai izmanto <code>culture</code> un <code>ignoreCase</code> norādīto reģistrjutību. <br />      <br />      Salīdzināšanas funkcija pieņem divus argumentus un atgriež -1, 0 vai 1, pamatojoties uz to, vai pirmā vērtība ir mazāka par, vienāda ar vai lielāka par otro.<br />      <br />      Noklusējuma vērtība <code>ignoreCase</code> ir “nepatiess”. <code>culture</code> jābūt vienai no .NET struktūras atbalstītajām lokalizācijām (piemēram, "lv-LV").    


## Examples

### Example #1 
Lai noteiktu, vai vērtības ir vienādas, salīdziniet &#34;a&#34; un &#34;A&#34;, izmantojot lokalizāciju &#34;en-US&#34;. 
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
Lai noteiktu, vai vērtības ir vienādas, salīdziniet &#34;a&#34; un &#34;A&#34;, izmantojot lokalizāciju &#34;en-US&#34; un ignorējot lielo/mazo burtu lietojumu.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
