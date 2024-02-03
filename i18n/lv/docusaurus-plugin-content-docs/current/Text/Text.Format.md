---
title: Text.Format
---

# Text.Format


## Description

Tiek atgriezts formatēts teksts, kas ir iegūts, izmantojot formatējuma virkni un argumentus.


## Syntax

```powerquery
Text.Format(
    formatString as text,
    arguments as any,
    optional culture as text
) as text
```


## Details

Tiek atgriezts formatēts teksts, kas ir izveidots, parametrā <code>formatString</code> norādītajai formatējuma virknei lietojot parametrā <code>arguments</code> norādītos saraksta vai ieraksta argumentus. Var norādīt arī neobligātu parametru <code>culture</code> (piemēram, "lv-LV").


## Examples

### Example #1 
Formatējiet skaitļu sarakstu.
```powerquery
Text.Format("#{0}, #{1}, and #{2}.", {17, 7, 22})
```

Result: 
```powerquery
"17, 7, and 22."
```


### Example #2 
Formatējiet dažādus ieraksta datu tipus atbilstoši ASV angļu valodas kultūrai.
```powerquery
Text.Format(
    "The time for the #[distance] km run held in #[city] on #[date] was #[duration].",
    [
        city = "Seattle",
        date = #date(2015, 3, 10),
        duration = #duration(0, 0, 54, 40),
        distance = 10
    ],
    "en-US"
)
```

Result: 
```powerquery
"The time for the 10 km run held in Seattle on 3/10/2015 was 00:54:40."
```




## Category
Text.Conversions from and to text
