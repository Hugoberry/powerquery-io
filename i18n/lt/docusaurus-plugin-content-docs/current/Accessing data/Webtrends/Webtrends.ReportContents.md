---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

Pateikiama lentelė su ataskaitų turiniu iš „Webtrends“.


## Syntax

```powerquery
Webtrends.ReportContents(
    ProfileId as text,
    ReportId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

Iškviečia nustatytą „Webtrends“ ataskaitų galinį punktą ir pateikia visus duomenis kaip lentelę.


## Examples

### Example #1 
Iškviečia „Webtrends“ lankytojų ataskaitos galinį punktą, kad būtų pateikti pastarųjų 30 dienų duomenys
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
Lankytojų duomenų lentelė
```



