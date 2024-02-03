---
title: Table.FuzzyNestedJoin
---

# Table.FuzzyNestedJoin


## Description

Выполняет нечеткое соединение таблиц по указанным столбцам и выводит результат соединения в новом столбце.


## Syntax

```powerquery
Table.FuzzyNestedJoin(
    table1 as table,
    key1 as any,
    table2 as table,
    key2 as any,
    newColumnName as text,
    optional joinKind as JoinKind.Type,
    optional joinOptions as record
) as table
```


## Details

Соединяет строки таблицы <code>table1</code> со строками таблицы <code>table2</code> на основе нечеткого соответствия значений ключевых столбцов, выбранных в <code>key1</code> (для <code>table1</code>) и в <code>key2</code> (для <code>table2</code>). Результаты записываются в столбец с именем <code>newColumnName</code>.<br />Нечеткое соответствие — это сравнение текста на основе похожести, а не полного совпадения.<br />Необязательное значение <code>joinKind</code> указывает тип выполняемого соединения. По умолчанию выполняется левое внешнее соединение, если <code>joinKind</code> не указано. Возможны следующие значения:    <ul><li><code>JoinKind.Inner</code></li><li><code>JoinKind.LeftOuter</code></li><li><code>JoinKind.RightOuter</code></li><li><code>JoinKind.FullOuter</code></li><li><code>JoinKind.LeftAnti</code></li><li><code>JoinKind.RightAnti</code></li></ul><br />Необязательный набор <code>joinOptions</code> может быть включен для указания способа сравнения ключевых столбцов. Возможны следующие значения:    <ul><li><code>ConcurrentRequests</code> : Число от 1 до&#160;8, указывающее количество параллельных потоков, используемых для нечеткого соответствия. Значение по умолчанию&#160;— 1.</li><li><code>Culture</code> : Позволяет сопоставлять записи на основе правил конкретного языка и региональных параметров. Например, параметр Culture со значением &quot;ja-JP&quot; сопоставляет записи согласно правилам японского языка. Значение по умолчанию&#160;— &quot;&quot;, при котором используется инвариантный английский язык и региональные параметры.</li><li><code>IgnoreCase</code> : Логическое значение (true/false), которое разрешает сопоставление ключей без учета регистра. Например, когда задано true, &quot;Виноград&quot; будет совпадать с &quot;виноград&quot;. Значение по умолчанию&#160;— true.</li><li><code>IgnoreSpace</code> : Логическое значение (true/false), которое разрешает объединять части текста для поиска соответствий. Например, когда задано true, &quot;Вино град&quot; будет совпадать с &quot;Виноград&quot;. Значение по умолчанию&#160;— true.</li><li><code>NumberOfMatches</code> : Целое число, задающее максимальное количество соответствующих строк, которые могут быть возвращены для каждой строки ввода. Например, значение&#160;1 возвратит для каждой строки ввода не более одного совпадения. Если этот параметр не указан, возвращаются все соответствующие строки.</li><li><code>SimilarityColumnName</code> : Имя столбца, в котором показано сходство входного значения и репрезентативного значения для этих входных данных. Значение по умолчанию&#160;— NULL. В этом случае новый столбец для сходства не будет добавлен.</li><li><code>Threshold</code> : Число от 0,00 до 1,00, указывающее показатель подобия, при котором два значения считаются совпадающими.    Например, &quot;Виноград&quot; и &quot;Виногрд&quot; (без буквы &quot;а&quot;) будут соответствовать друг другу, только если задано значение этого параметра ниже 0,90.    Порог в 1,00 позволяет исключительно точные совпадения.    (Обратите внимание, что нечеткое &quot;точное совпадение&quot; может игнорировать такие различия, как регистр, порядок слов и пунктуация.)    Значение по умолчанию — 0,80.</li><li><code>TransformationTable</code> : Таблица, позволяющая сопоставлять записи по настраиваемым сопоставлениям значений. Она должна содержать столбцы From (от чего) и To (к чему). Например, если таблица преобразования содержит в столбце From значение &quot;Виноград&quot;, а в столбце To значение &quot;Изюм&quot;, то эти два значения будут считаться соответствующими друг другу. Преобразование будет применяться ко всем вхождениям текста, указанного в таблице. Согласно таблице выше, &quot;Виноград сладкий&quot; будет также соответствовать тексту &quot;Изюм сладкий&quot;.</li></ul><br />


## Examples

### Example #1 
Левое внутреннее нечеткое соединение двух таблиц на основе [FirstName]
```powerquery
Table.FuzzyNestedJoin(
	  Table.FromRecords(
        {
		        [CustomerID = 1, FirstName1 = "Bob", Phone = "555-1234"],
		        [CustomerID = 2, FirstName1 = "Robert", Phone = "555-4567"]
	      },
        type table [CustomerID = nullable number, FirstName1 = nullable text, Phone = nullable text]
    ),
	  {"FirstName1"},
	  Table.FromRecords(
        {
		        [CustomerStateID = 1, FirstName2 = "Bob", State = "TX"],
		        [CustomerStateID = 2, FirstName2 = "bOB", State = "CA"]
	      },
        type table [CustomerStateID = nullable number, FirstName2 = nullable text, State = nullable text]
    ),
	  {"FirstName2"},
	  "NestedTable",
	  JoinKind.LeftOuter,
	  [IgnoreCase = true, IgnoreSpace = false]
)
```

Result: 
```powerquery
Table.FromRecords({
    [
		    CustomerID = 1,
		    FirstName1 = "Bob",
		    Phone = "555-1234",
		    NestedTable = Table.FromRecords({
            [
				      CustomerStateID = 1,
				      FirstName2 = "Bob",
				      State = "TX"
			      ],
            [
				      CustomerStateID = 2,
				      FirstName2 = "bOB",
				      State = "CA"
			      ]
		    })
	  ],
    [
		  CustomerID = 2,
		  FirstName1 = "Robert",
		  Phone = "555-4567",
		  NestedTable = Table.FromRecords({})
	  ]
})
```




## Category
Table.Transformation
