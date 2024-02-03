---
title: Text.PositionOfAny
---

# Text.PositionOfAny


## Description

Tiek atgriezta teksta vērtības vai jebkuras norādītās rakstzīmes pirmā pozīcija (-1, ja netiek atrasta).


## Syntax

```powerquery
Text.PositionOfAny(
    text as text,
    characters as list,
    optional occurrence as Occurrence.Type
) as any
```


## Details

Atgriež jebkuras sarakstā <code>characters</code> norādītās rakstzīmes pirmo pozīciju, kas atrodama <code>text</code>.    Var izmantot neobligātu parametru <code>occurrence</code>, lai norādītu atgriežamo gadījuma pozīciju.


## Examples

### Example #1 
Atrodiet &#34;W&#34; vai &#34;H&#34; pirmo pozīciju tekstā &#34;Hello, World!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"})
```

Result: 
```powerquery
0
```


### Example #2 
Atrodiet visas &#34;W&#34; vai &#34;H&#34; pozīcijas tekstā &#34;Hello, World!&#34;.
```powerquery
Text.PositionOfAny("Hello, World!", {"H", "W"}, Occurrence.All)
```

Result: 
```powerquery
{0, 7}
```




## Category
Text.Membership
