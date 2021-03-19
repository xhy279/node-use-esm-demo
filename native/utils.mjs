import pathExists from "path-exists";

export function exists(path) {
  return pathExists.sync(path)
}