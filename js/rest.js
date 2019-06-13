const octokit = Octokit({

    userAgent: 'myWebsite v1.0.0',
    baseUrl: 'https://api.github.com'

})

octokit.activity.listPublicEventsForUser( {
     username:'katelyn98'}
)