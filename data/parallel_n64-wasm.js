var Module = typeof Module !== "undefined" ? Module : {};
Module["locateFile"] = function(path, prefix) {
  if (path.endsWith(".data")) return (window.EJS_pathtodata || "") + "parallel_n64-wasm.data";
  if (path.endsWith(".wasm")) return (window.EJS_pathtodata || "") + "parallel_n64-wasm.wasm";
  return prefix + path;
};
