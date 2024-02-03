---
title: Comparer.FromCulture
---

# Comparer.FromCulture


## Description

Pateikiama lyginimo funkcija pagal nurodytą kultūrą ir skiriant didžiąsias ir mažąsias raides.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Details

Pateikiama lyginimo funkcija, kuri naudoja <code>culture</code> ir <code>ignoreCase</code> nurodytas didžiąsias ir mažąsias raides, kad galėtų atlikti lyginimus.<br />      <br />      Lyginimo funkcija priima du argumentus ir pateikia -1, 0 arba 1, atsižvelgiant į tai, ar pirmoji reikšmė yra mažesnė, lygi arba didesnė nei antroji.<br />      <br />      Numatytoji <code>ignoreCase</code> reikšmė yra klaidinga. <code>culture</code> turi būti viena iš lokalių, kurias palaiko „.NET framework“ (pvz., „en-US“).    


## Examples

### Example #1 
Palyginkite „a“ ir „A“ naudodami lokalę „en-US“, kad nustatytumėte, ar reikšmės lygios.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
Palyginkite „a“ ir „A“ naudodami lokalę „en-US“ nepaisydami didžiųjų ir mažųjų raidžių, kad nustatytumėte, ar reikšmės lygios.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
