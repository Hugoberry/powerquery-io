---
title: Csv.Document
---

# Csv.Document


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


## Remarks

Повертає вміст CSV-документа у вигляді таблиці.

-   Для `columns` можна вказати Null-значення, кількість стовпців, список імен стовпців, тип таблиці або запис параметрів.
-   Для `delimiter` можна вказати один символ, список символів або значення `""`, яке вказує на те, що рядки слід розділяти кількома пробілами поспіль. Значення за замовчуванням: `","`.
-   Відомості про підтримувані значення `extraValues` див. тут: `ExtraValues.Type`.
-   `encoding` указує тип кодування тексту.

Якщо для `columns` вказано запис (а для `delimiter`, `extraValues` і `encoding` – Null-значення), можна додати такі поля записів:

-   `Delimiter`: роздільник стовпців, який складається з одного символу. Значення за замовчуванням: `","`.
-   `Columns`: можна вказати Null-значення, кількість стовпців, список імен стовпців або тип таблиці. Якщо вказана тут кількість стовпців менша, ніж у вхідних даних, додаткові стовпці ігноруватимуться. Якщо вказана тут кількість стовпців більша, ніж у вхідних даних, додаткові стовпці матимуть Null-значення. Якщо кількість стовпців не вказано, вона визначатиметься вхідними даними.
-   `Encoding`: кодування тексту файлу. Значення за замовчуванням: 65001 (UTF-8).
-   `CsvStyle`: визначає, як обробляти символи лапок.
    -   `CsvStyle.QuoteAfterDelimiter` (значення за замовчуванням): лапки в полі враховуються лише безпосередньо після роздільника.
    -   `CsvStyle.QuoteAlways`: лапки в полі завжди враховуються незалежно від позиції.
-   `QuoteStyle`: указує, як обробляються розриви рядків у лапках.
    -   `QuoteStyle.Csv` (значення за замовчуванням): розриви рядків у лапках обробляються як частина даних, а не як кінець поточного рядка.
    -   `QuoteStyle.None`: усі розриви рядків обробляються як кінець поточного рядка, навіть якщо вони зустрічаються в рамках значення в лапках.
-   `IncludeByteOrderMark`: логічне значення, яке вказує, чи потрібно включати позначку порядку байтів (BOM) на початку вихідних даних у форматі CSV. Якщо встановлено значення true, BOM записується (наприклад, UTF-8 BOM: `0xEF 0xBB 0xBF`); якщо встановлено значення false, BOM не включається. Цей параметр застосовується лише для сценаріїв виводу. Значення за замовчуванням: `false`.
-   `ExtraValues`: відомості про підтримувані значення ExtraValues див. тут: `ExtraValues.Type`.


## Examples

### Example #1
Обробка тексту CSV-файлу із заголовками стовпців.
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


### Example #2
Process CSV text with multiple delimiter characters. In this example, the third parameter specifies the delimiter pattern `#|#` to use instead of the default.
```powerquery
let
    csv = Text.Combine({"OrderID#|#Color", "1#|#Red", "2#|#Blue"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv, null, "#|#"))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Color = "Red"],
    [OrderID = "2", Color = "Blue"]
})
```




## Category
Accessing data
