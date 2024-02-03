---
title: SharePoint.Files
---

# SharePoint.Files


## Description

Повертає таблицю, яка містить документи із сайту SharePoint.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Details

Повертає таблицю, яка містить рядок для кожного документа, знайденого на вказаному сайті SharePoint (<code>url</code>) і у вкладених папках. Кожен рядок містить властивості папки або файлу та посилання на відповідний вміст. Можна вказати параметр <code>options</code>, щоб керувати наведеними нижче параметрами.    <ul><li><code>ApiVersion</code> : Параметр із числовим (14 або 15) чи текстовим (Auto) значенням, що вказує, яку версію інтерфейсу API SharePoint потрібно використовувати для цього сайту. Якщо значення не вказано, використовується API версії 14. Якщо вказано значення Auto, версія сервера визначається автоматично (якщо це можливо). Якщо це неможливо, використовується стандартна версія&#160;14. Для неангломовних сайтів SharePoint необхідно вказати версію 15 або новішу.</li></ul>    



## Category
Accessing data