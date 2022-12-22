


let questions = [
    {
        'question' :   'Why is AWS more economical than traditional data centers for applications with varying compute workloads?',
        'choice_A' :   'Amazon EC2 costs are billed on a monthly basis',
        'choice_B' :   'Users retain full administrative access to their Amazon EC2 instances',
        'choice_C' :   'Amazon EC2 instances can be launched on demand when needed',
        'choice_D' :   'Users can permanently run enough instances to handle peak workloads',
        'answer'   :   'C',
        'explanation' :'The ability to launch instances on demand when needed allows users to launch and terminate instances inresponse to a varying workload. This is a more economical practice than purchasing enough on-premises serversto handle the peak load',

    },
    {
        'question' :   'Which AWS service would simplify the migration of a database to AWS?',
        'choice_A' :   'AWS Storage Gateway',
        'choice_B' :   'AWS Database Migration Service (AWS DMS)',
        'choice_C' :   'Amazon EC2',
        'choice_D' :   'Amazon AppStream 2.0',
        'answer'   :   'B',
        'explanation' :'AWS DMS helps users migrate databases to AWS quickly and securely. The source database remainsfully operational during the migration, minimizing downtime to applications that rely on the database. AWS DMS can migrate data to and from most widely used commercial and open-source databases.',

    },
    {
        'question' :   'Which AWS offering enables users to find, buy, and immediately start using software solutions in their AWS environment?',
        'choice_A' :   'AWS Config',
        'choice_B' :   'AWS OpsWorks',
        'choice_C' :   'AWS SDK',
        'choice_D' :   'AWS Marketplace',
        'answer'   :   'D',
        'explanation' :'AWS Marketplace is a digital catalog with thousands of software listings from independent software vendors that makes it easy to find, test, buy, and deploy software that runs on AWS.',
    },
    {
        'question' :   'Which AWS networking service enables a company to create a virtual network within AWS?',
        'choice_A' :   'AWS Config',
        'choice_B' :   'Amazon Route 53',
        'choice_C' :   'AWS Direct Connect',
        'choice_D' :   ' Amazon Virtual Private Cloud (Amazon VPC)',
        'answer'   :   'D',
        'explanation' :'Amazon VPC lets users provision a logically isolated section of the AWS Cloud where users can launch AWS resources in a virtual network that they define.',
    },
    {
        'question' :   'Which of the following is an AWS responsibility under the AWS shared responsibility model?',
        'choice_A' :   'Configuring third-party applications ',
        'choice_B' :   'Maintaining physical hardware',
        'choice_C' :   'Securing application access and data',
        'choice_D' :   'Managing guest operating systems',
        'answer'   :   'B',
        'explanation' :'Maintaining physical hardware is an AWS responsibility under the AWS shared responsibility model.',

    },
    {
        'question' :   ') Which component of the AWS global infrastructure does Amazon CloudFront use to ensure low-latency delivery?',
        'choice_A' :   'AWS Regions',
        'choice_B' :   'Edge locations',
        'choice_C' :   'Availability Zones',
        'choice_D' :   'Virtual Private Cloud (VPC)',
        'answer'   :   'B',
        'explanation' :'To deliver content to users with lower latency, Amazon CloudFront uses a global network of points ofpresence (edge locations and regional edge caches) worldwide. ',

    },
    {
        'question' :   ') How would a system administrator add an additional layer of login security to a user s AWS Management Console?',
        'choice_A' :   'Use Amazon Cloud Directory',
        'choice_B' :   'Audit AWS Identity and Access Management (IAM) roles',
        'choice_C' :   'Enable multi-factor authentication',
        'choice_D' :   'Enable AWS CloudTrail',
        'answer'   :   'C',
        'explanation' :'Multi-factor authentication (MFA) is a simple best practice that adds an extra layer of protection on top of a username and password. With MFA enabled, when a user signs in to an AWS Management Console, they will be prompted for their username and password (the first factor—what they know), as well as for an authentication code from their MFA device (the second factor—what they have). Taken together, these multiple factors provide increased security for AWS account settings and resources.',

    },
    {
        'question' :   'Which service can identify the user that made the API call when an Amazon EC2 instance is terminated?',
        'choice_A' :   'AWS Trusted Advisor',
        'choice_B' :   'AWS CloudTrail',
        'choice_C' :   'AWS X-Ray',
        'choice_D' :   'AWS Identity and Access Management (AWS IAM)',
        'answer'   :   'B',
        'explanation' :'AWS CloudTrail helps users enable governance, compliance, and operational and risk auditing of their AWS accounts. Actions taken by a user, role, or an AWS service are recorded as events in CloudTrail. Events include actions taken in the AWS Management Console, AWS Command Line Interface (CLI), and AWS SDKs and APIs.',
    },
    {
        'question' :   'Which service would be used to send alerts based on Amazon CloudWatch alarms?',
        'choice_A' :   'Amazon Simple Notification Service (Amazon SNS)',
        'choice_B' :   'AWS CloudTrail',
        'choice_C' :   'AWS Trusted Advisor',
        'choice_D' :   'Amazon Route 53',
        'answer'   :   'A',
        'explanation' :'Amazon SNS and Amazon CloudWatch are integrated so users can collect, view, and analyze metrics for every active SNS. Once users have configured CloudWatch for Amazon SNS, they can gain better insight into the performance of their Amazon SNS topics, push notifications, and SMS deliveries.',
    },
    {
        'question' :   'Where can a user find information about prohibited actions on the AWS infrastructure?',
        'choice_A' :   'AWS Trusted Advisor',
        'choice_B' :   'AWS Trusted Advisor',
        'choice_C' :   'AWS Billing Console',
        'choice_D' :   'AWS Acceptable Use Policy',
        'answer'   :   'D',
        'explanation' :'The AWS Acceptable Use Policy provides information regarding prohibited actions on the AWS infrastructure. ',

    },
];