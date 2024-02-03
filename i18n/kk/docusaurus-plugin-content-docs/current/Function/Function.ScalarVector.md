---
title: Function.ScalarVector
---

# Function.ScalarVector


## Description

Бірнеше шақыруды топтап, векторлық функциямен қатар скалярлық функцияны жасайды.


## Syntax

```powerquery
Function.ScalarVector(
    scalarFunctionType as type,
    vectorFunction as function
) as function
```


## Details

Аргументтердің бір жолы бар <code>vectorFunction</code> шақыратын <code>scalarFunctionType</code> түріндегі скалярлық функцияны қайтарады және оның бір шығысын қайтарады. Сонымен қатар, скалярлық функция кіріс деректері кестесінің әрбір жолы үшін қайталанып қолданылса, мысалы, Table.AddColumn, <code>vectorFunction</code> барлық кіріс деректері үшін бір рет қолданылады.<br /><code>vectorFunction</code> бағандары <code>scalarFunctionType</code> параметрлеріне аты мен орны бойынша сәйкес келетін кестеге өтеді. Бұл кестенің әрбір жолында скалярлық функция үшін бір шақыру үшін аргументтер болады, <code>scalarFunctionType</code> параметрлеріне сәйкес бағандармен.<br /><code>vectorFunction</code> кіріс кестесімен бірдей ұзындыққа ие тізімді қайтаруы тиіс, оның элементі әр орында бірдей орындағы кіріс жолында скалярлық функцияны бағалаумен бірдей нәтижеге ие болуы тиіс.<br />Кіріс кестесінің ағынмен кіруі күтіледі, кіріс келгенде <code>vectorFunction</code> өз шығысын ағынмен шығаруы күтіледі, бір мезгілде тек бір кіріс бөлігімен жұмыс істейді. Атап айтқанда, <code>vectorFunction</code> қзінің кіріс кестесін бірнеше рет көрсетпеуі тиіс.<br />



## Category
Function
