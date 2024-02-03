---
title: Date.WeekOfYear
---

# Date.WeekOfYear


## Description

Returnează un număr de la 1 la 54 care indică în ce săptămână a anului cade această dată.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Returnează un număr de la 1 la 54 care indică în ce săptămână din an cade data, <code>dateTime</code>. <ul>        <li><code>dateTime</code>: O valoare <code>datetime</code> pentru care este determinată săptămâna din an.</li>        <li><code>firstDayOfWeek</code>: O valoare opțională <code>Day.Type</code> care indică ziua considerată drept începutul unei noi săptămâni (de exemplu, <code>Day.Sunday</code>). Dacă nu se specifică, se utilizează o valoare implicită dependentă de cultură.</li>      </ul>


## Examples

### Example #1 
Determinați ce săptămână a anului conține 27 martie 2011.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2 
Determinați ce săptămână din an conține 27 martie 2011, utilizând ziua de luni ca începutul săptămânii.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
