---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


Возвращает базы данных Analysis Services на определенном узле.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Возвращает базы данных в определенном экземпляре Analysis Services — <code>server</code>. Чтобы указать дополнительные свойства, можно предоставить необязательный параметр записи <code>options</code>. Запись может содержать следующие поля:    <ul><li><code>TypedMeasureColumns</code> : Логическое значение, указывающее, будут ли в качестве типов добавленных столбцов мер использоваться типы, указанные во многомерной или табличной модели. Если задано значение false, для всех столбцов мер будет использоваться тип &quot;number&quot;. Значение по умолчанию — false.</li><li><code>Culture</code> : Имя языка и региональных параметров для данных. Это соответствует свойству строки подключения &quot;Код языка&quot;.</li><li><code>CommandTimeout</code> : Допустимое время выполнения запроса на стороне сервера до его отмены. Значение по умолчанию зависит от драйвера.</li><li><code>ConnectionTimeout</code> : Время ожидания до отмены попытки подключения к серверу. Значение по умолчанию зависит от драйвера.</li><li><code>SubQueries</code> : Число (0, 1 или 2), задающее значение свойства &quot;SubQueries&quot; в строке подключения. Оно управляет поведением вычисляемых членов в подзапросах выборки или вложенных кубах. (Значение по умолчанию&#160;— 2).</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
