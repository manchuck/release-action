import { ReleaseEvent } from "@octokit/webhooks-types";

export const releaseEvent: ReleaseEvent = {
  action: "created",
  release: {
    url: "https://api.github.com/repos/alice.bob/release-testing/releases/123456789011",
    assets_url: "https://api.github.com/repos/alice.bob/release-testing/releases/123456789011/assets",
    upload_url: "https://uploads.github.com/repos/alice.bob/release-testing/releases/123456789011/assets{?name,label}",
    html_url: "https://github.com/alice.bob/release-testing/releases/tag/untagged-093b136fe952f1a03a3d",
    id: 123456789011,
    author: {
      login: "alice.bob",
      id: 123456,
      node_id: "MDQ6VXNlcjEyMzQ1NgogICAgICAg",
      avatar_url: "https://avatars.githubusercontent.com/u/123456?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/alice.bob",
      html_url: "https://github.com/alice.bob",
      followers_url: "https://api.github.com/users/alice.bob/followers",
      following_url: "https://api.github.com/users/alice.bob/following{/other_user}",
      gists_url: "https://api.github.com/users/alice.bob/gists{/gist_id}",
      starred_url: "https://api.github.com/users/alice.bob/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/alice.bob/subscriptions",
      organizations_url: "https://api.github.com/users/alice.bob/orgs",
      repos_url: "https://api.github.com/users/alice.bob/repos",
      events_url: "https://api.github.com/users/alice.bob/events{/privacy}",
      received_events_url: "https://api.github.com/users/alice.bob/received_events",
      type: "User",
      site_admin: false
    },
    node_id: "RE_kwDOJe08xM4HWkAL",
    tag_name: "3.9.3",
    target_commitish: "main",
    name: "1.0.4",
    draft: true,
    prerelease: false,
    created_at: "2023-10-01T14:21:07Z",
    published_at: null,
    assets: [],
    tarball_url: null,
    zipball_url: null,
    body: "The 3.9.3 release of the Node server SDK includes significant updates such as the addition of incoming signature verification for SMS, the inclusion of verifySignature in the JWT package, and file download functionality. Additionally, it addresses issues by fixing response types on file downloads.\r\n\r\n### Whats New\r\n- Incoming signature verification in SMS feature ([#861](https://github.com/Vonage/vonage-node-sdk/pull/861))\r\n- `verifySignature` to JWT package ([#860](https://github.com/Vonage/vonage-node-sdk/pull/860))\r\n- File download functionality ([#858](https://github.com/Vonage/vonage-node-sdk/pull/858))\r\n\r\n### Fixed\r\n- Response types on file downloads in voice feature ([#864](https://github.com/Vonage/vonage-node-sdk/pull/864))\r\n\r\n### New Contributors\r\n- eimers made their first contribution in https://github.com/Vonage/vonage-php-sdk-core/pull/421",
    mentions_count: 2
  },
  repository: {
    id: 1234567890,
    node_id: "R_kgDOJe08xA",
    name: "release-testing",
    full_name: "alice.bob/release-testing",
    private: false,
    owner: {
      login: "alice.bob",
      id: 123456,
      node_id: "MDQ6VXNlcjEyMzQ1NgogICAgICAg",
      avatar_url: "https://avatars.githubusercontent.com/u/123456?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/alice.bob",
      html_url: "https://github.com/alice.bob",
      followers_url: "https://api.github.com/users/alice.bob/followers",
      following_url: "https://api.github.com/users/alice.bob/following{/other_user}",
      gists_url: "https://api.github.com/users/alice.bob/gists{/gist_id}",
      starred_url: "https://api.github.com/users/alice.bob/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/alice.bob/subscriptions",
      organizations_url: "https://api.github.com/users/alice.bob/orgs",
      repos_url: "https://api.github.com/users/alice.bob/repos",
      events_url: "https://api.github.com/users/alice.bob/events{/privacy}",
      received_events_url: "https://api.github.com/users/alice.bob/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/alice.bob/release-testing",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/alice.bob/release-testing",
    forks_url: "https://api.github.com/repos/alice.bob/release-testing/forks",
    keys_url: "https://api.github.com/repos/alice.bob/release-testing/keys{/key_id}",
    collaborators_url: "https://api.github.com/repos/alice.bob/release-testing/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/alice.bob/release-testing/teams",
    hooks_url: "https://api.github.com/repos/alice.bob/release-testing/hooks",
    issue_events_url: "https://api.github.com/repos/alice.bob/release-testing/issues/events{/number}",
    events_url: "https://api.github.com/repos/alice.bob/release-testing/events",
    assignees_url: "https://api.github.com/repos/alice.bob/release-testing/assignees{/user}",
    branches_url: "https://api.github.com/repos/alice.bob/release-testing/branches{/branch}",
    tags_url: "https://api.github.com/repos/alice.bob/release-testing/tags",
    blobs_url: "https://api.github.com/repos/alice.bob/release-testing/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/alice.bob/release-testing/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/alice.bob/release-testing/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/alice.bob/release-testing/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/alice.bob/release-testing/statuses/{sha}",
    languages_url: "https://api.github.com/repos/alice.bob/release-testing/languages",
    stargazers_url: "https://api.github.com/repos/alice.bob/release-testing/stargazers",
    contributors_url: "https://api.github.com/repos/alice.bob/release-testing/contributors",
    subscribers_url: "https://api.github.com/repos/alice.bob/release-testing/subscribers",
    subscription_url: "https://api.github.com/repos/alice.bob/release-testing/subscription",
    commits_url: "https://api.github.com/repos/alice.bob/release-testing/commits{/sha}",
    git_commits_url: "https://api.github.com/repos/alice.bob/release-testing/git/commits{/sha}",
    comments_url: "https://api.github.com/repos/alice.bob/release-testing/comments{/number}",
    issue_comment_url: "https://api.github.com/repos/alice.bob/release-testing/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/alice.bob/release-testing/contents/{+path}",
    compare_url: "https://api.github.com/repos/alice.bob/release-testing/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/alice.bob/release-testing/merges",
    archive_url: "https://api.github.com/repos/alice.bob/release-testing/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/alice.bob/release-testing/downloads",
    issues_url: "https://api.github.com/repos/alice.bob/release-testing/issues{/number}",
    pulls_url: "https://api.github.com/repos/alice.bob/release-testing/pulls{/number}",
    milestones_url: "https://api.github.com/repos/alice.bob/release-testing/milestones{/number}",
    notifications_url: "https://api.github.com/repos/alice.bob/release-testing/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/alice.bob/release-testing/labels{/name}",
    releases_url: "https://api.github.com/repos/alice.bob/release-testing/releases{/id}",
    deployments_url: "https://api.github.com/repos/alice.bob/release-testing/deployments",
    created_at: "2023-05-04T14:45:49Z",
    updated_at: "2023-05-05T14:35:42Z",
    pushed_at: "2023-10-02T15:38:02Z",
    git_url: "git://github.com/alice.bob/release-testing.git",
    ssh_url: "git@github.com:alice.bob/release-testing.git",
    clone_url: "https://github.com/alice.bob/release-testing.git",
    svn_url: "https://github.com/alice.bob/release-testing",
    homepage: null,
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: "public",
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "main"
  },
  sender: {
    login: "alice.bob",
    id: 123456,
    node_id: "MDQ6VXNlcjEyMzQ1NgogICAgICAg",
    avatar_url: "https://avatars.githubusercontent.com/u/123456?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/alice.bob",
    html_url: "https://github.com/alice.bob",
    followers_url: "https://api.github.com/users/alice.bob/followers",
    following_url: "https://api.github.com/users/alice.bob/following{/other_user}",
    gists_url: "https://api.github.com/users/alice.bob/gists{/gist_id}",
    starred_url: "https://api.github.com/users/alice.bob/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/alice.bob/subscriptions",
    organizations_url: "https://api.github.com/users/alice.bob/orgs",
    repos_url: "https://api.github.com/users/alice.bob/repos",
    events_url: "https://api.github.com/users/alice.bob/events{/privacy}",
    received_events_url: "https://api.github.com/users/alice.bob/received_events",
    type: "User",
    site_admin: false
  }
}
