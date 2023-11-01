let 
    type2text = (_type)=> 
            try 
                Value.Metadata(_type)[Documentation.Name]
            otherwise
                Table.Schema(
                    #table(type table [tmpVar = _type], {})
                )[Kind]{0},
    sharedTab = Record.ToTable(#shared),
//select only functions from #shared
    selectFunctions = Table.SelectRows(sharedTab, each Type.Is(Value.Type([Value]), Function.Type)),
//pull documentation from each function
    docTab = Table.AddColumn(selectFunctions, "Documentation", each Text.FromBinary(Json.FromValue(Value.Metadata(Value.Type([Value]))))),
// pull return type from each function
    returnTypeTab = Table.AddColumn(docTab, "ReturnType", each type2text(Type.FunctionReturn(Value.Type([Value])))),
// pull required parameters from each function
    requiredParamsTab = Table.AddColumn(returnTypeTab, "RequiredParameters", each Type.FunctionRequiredParameters(Value.Type([Value]))),
// pull parameters from each function
    paramsTab  = Table.AddColumn(requiredParamsTab, "Parameters", 
    each let
            valueType = Value.Type([Value]),
            functionParameters = Type.FunctionParameters(valueType),
            fieldNames = Record.FieldNames(functionParameters),
            transformations = List.Transform(fieldNames, each {_, type2text}),
            transformedRecord = Record.TransformFields(functionParameters, transformations),
            jsonBinary = Json.FromValue(transformedRecord)
         in 
            Text.FromBinary(jsonBinary)
    ),
    dox = paramsTab
in
    dox
