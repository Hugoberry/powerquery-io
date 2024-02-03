---
title: Comparer.Equals
---

# Comparer.Equals


## Description

Atgriež loģisku vērtību, pamatojoties uz divu norādīto vērtību vienādības pārbaudi.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Details

Atgriež <code>logical</code> vērtību, pamatojoties uz vienādības pārbaudi divām norādītajām vērtībām, <code>x</code> un <code>y</code>, izmantojot norādīto vērtību <code>x</code> <code>comparer</code>.      <div>        <code>comparer</code> ir <code>Salīdzinātājs</code>, kuru izmanto, lai kontrolētu salīdzināšanu.Salīdzināšanas funkcija pieņem divus argumentus un atgriež -1, 0 vai 1, balstoties uz to, vai pirmā vērtība ir mazāka, vienāda vai lielāka par otro vērtību. Salīdzinātājus var izmantot, lai nodrošinātu reģistrnejutīgu vai kultūrai un lokalizācijai atbilstošu salīdzināšanu.      </div>      <div>        Formulu valodā ir pieejami tālāk norādītie iebūvētie salīdzinātāji:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: izmanto precīzai kārtas skaitļu salīdzināšanai</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: izmanto precīzai kārtas skaitļu salīdzināšanai, kas nav reģistrjutīga</li>        <li> <code>Comparer.FromCulture</code>: izmanto, lai veiktu kultūrai atbilstošu salīdzināšanu</li>      </ul>


## Examples

### Example #1 
Lai noteiktu, vai vērtības ir vienlīdzīgas, salīdziniet &#34;1&#34; un &#34;A&#34;, izmantojot lokalizāciju &#34;en-US&#34;.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
