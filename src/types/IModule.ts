interface IModuleVersion {
  number: string;
  published_at: string;
  spdx_expression: string;
  original_license: string;
  researched_at: string | null;
  repository_sources: string[];
}

interface IModule {
  code_of_conduct_url: string | null;
  contributions_count: number;
  contribution_guidelines_url: string | null;
  dependent_repos_count: number;
  dependents_count: number;
  deprecation_reason: string | null;
  description: string;
  forks: number;
  funding_urls: string[] | null;
  homepage: string;
  keywords: string[];
  language: string;
  latest_download_url: string;
  latest_release_number: string;
  latest_release_published_at: string;
  latest_stable_release_number: string;
  latest_stable_release_published_at: string;
  license_normalized: boolean;
  licenses: string;
  name: string;
  normalized_licenses: string[];
  package_manager_url: string;
  platform: string;
  rank: number;
  repository_license: string;
  repository_status: string | null;
  repository_url: string;
  security_policy_url: string | null;
  stars: number;
  status: string | null;
  versions: IModuleVersion[];
}
