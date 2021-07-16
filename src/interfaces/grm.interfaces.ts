export interface Config {
  repository: string;
  local_path: string;
}

export interface Command {
  id?: number;
  command: string;
  commandCategory: CommandCategory;
  description?: string;
}

export interface CommandCategory {
  id?: number;
  name: string;
  commands: Command[];
}

export interface Repository {
  id?: number;
  ssh_https: string;
  repositoryCategory: RepositoryCategory;
  description?: string;
}

export interface RepositoryCategory {
  id?: number;
  name: string;
  parent?: RepositoryCategory;
  repositories: Repository[];
}
