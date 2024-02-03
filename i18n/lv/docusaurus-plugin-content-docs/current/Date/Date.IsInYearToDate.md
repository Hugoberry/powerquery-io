---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


## Description

Norāda, vai šis datums ir pašreizējā gadā un vai tas ir pašreizējā dienā vai pirms tās, kā to nosaka sistēmas pašreizējais datums un laiks.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Details

Norāda, vai sniegtā datetime vērtība <code>dateTime</code> ir pašreizējā gadā un vai tā ir pašreizējā dienā vai pirms tās, kā to nosaka sistēmas pašreizējais datums un laiks.      <ul>      <li><code>dateTime</code>: novērtējamā <code>date</code>, <code>datetime</code> vai <code>datetimezone</code> vērtība.</li>      </ul>


## Examples

### Example #1 
Noteikt, vai pašreizējais sistēmas laiks atrodas līdzšinējā gadā.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
