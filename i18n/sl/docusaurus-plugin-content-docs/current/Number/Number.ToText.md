---
title: Number.ToText
---

# Number.ToText


## Description

Pretvorite dano število v besedilo.


## Syntax

```powerquery
Number.ToText(
    number as number,
    optional format as text,
    optional culture as text
) as text
```


## Details

Pretvori številsko vrednost <code>number</code> v besedilno vrednost glede na obliko zapisa, določeno s/z <code>format</code>.<br />    <br />    Oblika zapisa je besedilna vrednost, ki označuje način pretvorbe števila. Več podrobnosti o podprtih vrednostih oblike zapisa je na voljo na spletnem mestu https://go.microsoft.com/fwlink/?linkid=2241210 and https://go.microsoft.com/fwlink/?linkid=2240884<br />    <br />    Navedete lahko tudi izbirni parameter <code>culture</code> (na primer "sl-SI") za nadzor vedenja za <code>format</code>.


## Examples

### Example #1 
Pretvorite število v besedilo brez navedbe oblike zapisa.
```powerquery
Number.ToText(4)
```

Result: 
```powerquery
"4"
```


### Example #2 
Pretvorite število v eksponentno obliko zapisa.
```powerquery
Number.ToText(4, "e")
```

Result: 
```powerquery
"4.000000e+000"
```


### Example #3 
Pretvorite število v obliko zapisa odstotka z enim decimalnim mestom.
```powerquery
Number.ToText(-0.1234, "P1")
```

Result: 
```powerquery
"-12.3 %"
```




## Category
Number.Conversion and formatting
