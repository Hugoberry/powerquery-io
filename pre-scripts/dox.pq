let    
    sharedTab = Record.ToTable(#shared),
//select only functions from #shared
    functions = Table.SelectRows(sharedTab, each Type.Is(Value.Type([Value]),type function) and not List.Contains({"doc2markdown","Signature"},[Name])),
//exclude the function that actually returns the Markdown version of documentation
    categories = Table.AddColumn(functions,"Documentation",each Json.FromValue(Value.Metadata(Value.Type([Value])))),
    modules = Table.AddColumn(categories, "FunctionReturn", each ),
    subCategories = Table.AddColumn(modules, "RequiredParams", each if [Module]="Accessing data" then Text.BeforeDelimiter([Name], ".", 0) else Text.AfterDelimiter([Category], ".")),
    dox = Table.AddColumn(subCategories,"doc",each doc2markdown([Name]))
in
    dox

// = Table.AddColumn(source, "Custom", each type2Text(Type.FunctionReturn(Value.Type([Value]))))
//= Table.AddColumn(source, "Custom", each Type.FunctionRequiredParameters(Value.Type([Value])))

// = Table.AddColumn(source, "Custom", each Json.FromValue(Record.TransformFields(Type.FunctionParameters(Value.Type([Value])), List.Transform(Record.FieldNames(Type.FunctionParameters(Value.Type([Value]))), each {_, type2Text}))))

// = Table.AddColumn(source, "Custom", 
//     each let
//             valueType = Value.Type([Value]),
//             functionParameters = Type.FunctionParameters(valueType),
//             fieldNames = Record.FieldNames(functionParameters),
//             transformations = List.Transform(fieldNames, each {_, type2Text}),
//             transformedRecord = Record.TransformFields(functionParameters, transformations)
//          in 
//             Json.FromValue(transformedRecord)
//     )


// = Table.AddColumn(source, "Custom", 
//     each let
//             valueType = Value.Type([Value]),
//             functionParameters = Type.FunctionParameters(valueType),
//             fieldNames = Record.FieldNames(functionParameters),
//             transformations = List.Transform(fieldNames, each {_, type2Text}),
//             transformedRecord = Record.TransformFields(functionParameters, transformations),
//             jsonBinary = Json.FromValue(transformedRecord)
//          in 
//             Text.FromBinary(jsonBinary)
//     )


// Table.SelectRows(sharedTab, each Type.Is(Value.Type([Value]),type type)
// = Table.AddColumn(source, "Custom", each Text.FromBinary(Json.FromValue(Value.Metadata([Value]))))