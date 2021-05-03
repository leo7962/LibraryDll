const path = require('path');
var version = process.argv[2];
var namespace = 'QuickStart.' + version.charAt(0).toUpperCase() + version.substr(1);
if (version === 'core') version = 'coreapp';

const baseNetAppPath = path.join(__dirname, '/src/' + namespace + '/bin/Debug/net' + version + '2.0');

process.env.EDGE_USE_CORECLR = 1;
if (version !== 'standard')
    process.env.EDGE_APP_ROOT = baseNetAppPath;

var edge = require('edge-js');

var baseDll = path.join(baseNetAppPath, namespace + '.dll');

var localTypeName = namespace + '.LocalMethods';

var sum = edge.func({
    assemblyFile: baseDll,
    typeName: localTypeName,
    methodName: 'Sum'
});

var substract = edge.func({
    assemblyFile: baseDll,
    typeName: localTypeName,
    methodName: 'Substract'
});

var getCurrentTime = edge.func({
    assemblyFile: baseDll,
    typeName: localTypeName,
    methodName: 'GetCurrentTime'
});

var useDynamicInput = edge.func({
    assemblyFile: baseDll,
    typeName: localTypeName,
    methodName: 'UseDynamicInput'
});


console.log('### Calling local methods from ' + namespace + '.dll')
sum('', function (error, result) {
    if (error) throw error;
    console.log(localTypeName + '.Sum');
    console.log('This the result: ')
    console.log(result);
});

substract('', function (error, result) {
    if (error) throw error;
    console.log('This the result: ');
    console.log(result);
});

getCurrentTime('', function (error, result) {
    if (error) throw error;
    console.log(localTypeName + '.GetCurrentTime');
    console.log(result);
});

useDynamicInput('Node.Js', function (error, result) {
    if (error) throw error;
    console.log(localTypeName + '.UseDynamicInput');
    console.log(result);
});
