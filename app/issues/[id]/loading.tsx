import IssueStatusBadge from '@/app/components/IssueStatusBadge'
import prisma from '@/prisma/client'
import { Heading, Text, Flex, Card, Box } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import { Skeleton } from '../../components/index';


const LoadingIssueDetailPage = () => {
  return (
    <Box className="max-w-xl">
    <Skeleton />
    <Flex className="space-x-3" my="2">
      <Skeleton width="5rem"/>
      <Skeleton  width="8rem"/>
    </Flex>
    <Card className="prose" mt="4">
    <Skeleton count={3}/>

    </Card>
</Box>
  )
}

export default LoadingIssueDetailPage