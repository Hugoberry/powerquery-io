#r "nuget: Newtonsoft.Json, 13.0.3"

using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Reflection;
using Newtonsoft.Json;

System.Reflection.Assembly assem = System.Reflection.Assembly.LoadFrom(@"C:\git\hub\powerquery-io\dlls\Microsoft.MashupEngine.dll");
System.IO.Stream fs = assem.GetManifestResourceStream("Microsoft.Mashup.Engine1.FunctionConstStrings.resources");
// System.IO.Stream fs = assem.GetManifestResourceStream("Microsoft.Mashup.Engine1.FunctionDescriptionStrings.resources");
var rr = new System.Resources.ResourceReader(fs);

// Convert ResourceReader to Dictionary
var resourceDictionary = new Dictionary<string, string>();
foreach (DictionaryEntry entry in rr)
{
    resourceDictionary.Add(entry.Key.ToString(), entry.Value.ToString());
}

// Serialize the dictionary to JSON
string jsonOutput = JsonConvert.SerializeObject(resourceDictionary, Formatting.Indented);

// Print or save the JSON as needed
// Console.WriteLine(jsonOutput);

// Optionally, if you want to save it to a file:
File.WriteAllText("en-const.json", jsonOutput);
