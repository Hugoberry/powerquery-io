---
title: Csv.Document
---

# Csv.Document


## Description

Повертає вміст CSV-документа у вигляді таблиці.


## Syntax

```powerquery
Csv.Document(
    source as any,
    optional columns as any,
    optional delimiter as any,
    optional extraValues as number,
    optional encoding as TextEncoding.Type
) as table
```


## Details

Повертає вміст CSV-документа у вигляді таблиці.    <ul>      <li>        Для параметра <code>columns</code> можна вказати Null-значення, кількість стовпців, список їхніх імен, тип таблиці або запис параметрів.      </li>      <li>        Для параметра <code>delimiter</code> можна вказати один символ, список символів або значення <code>""</code>, яке вказує на те, що рядки потрібно розділити послідовними пробілами. Значення за замовчуванням: <code>","</code>.      </li>      <li>        Підтримувані значення параметра <code>extraValues</code> див. в розділі <code>ExtraValues.Type</code>.      </li>      <li>        Параметр <code>encoding</code> визначає тип кодування тексту.      </li>    </ul>    Якщо вказано запис для параметра <code>columns</code> (а параметри <code>delimiter</code>, <code>extraValues</code> і <code>encoding</code> мають Null-значення), можна надати описані нижче поля запису:    <ul>      <li>        <code>Delimiter</code>: роздільник стовпців. Значення за замовчуванням: <code>","</code>.      </li>      <li>        <code>Columns</code>: можна вказати як Null-значення, кількість стовпців, список їхніх імен або тип таблиці. Якщо вказана тут кількість стовпців менша, ніж у вхідних даних, додаткові стовпці ігноруватимуться. Якщо вказана тут кількість стовпців більша, ніж у вхідних даних, додаткові стовпці матимуть Null-значення. Якщо кількість стовпців не вказана, вона визначатиметься вхідними даними.      </li>      <li>        <code>Encoding</code>: кодування тексту файлу. Значення за замовчуванням: 65001 (UTF-8).      </li>      <li>        <code>CsvStyle</code>: визначає, як обробляти лапки.        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (значення за замовчуванням): лапки в полі мають значення лише безпосередньо після роздільника.          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: лапки в полі завжди мають значення незалежно від їхнього розташування.          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: визначає, як обробляти розриви рядків у лапках.        <ul>          <li>            <code>QuoteStyle.Csv</code> (значення за замовчуванням): розриви рядків у лапках обробляються як частина даних, а не як кінець поточного рядка.          </li>          <li>            <code>QuoteStyle.None</code>: усі розриви рядків обробляються як кінець поточного рядка, навіть якщо вони зустрічаються в рамках значення в лапках.          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
Обробка тексту CSV із заголовками стовпців
```powerquery
let
    csv = Text.Combine({"OrderID,Item", "1,Fishing rod", "2,1 lb. worms"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Item = "Fishing rod"],
    [OrderID = "2", Item = "1 lb. worms"]
})
```




## Category
Accessing data
