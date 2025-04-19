import { useQuery } from "react-query";
import { AxiosError } from "axios";
import { memberType } from "src/types/member/member.type";
import memberRepositoryImpl from "src/repositories/memberRepository/memberRepositoryImpl";
import { qvickQueryKey } from "src/queries/queriesKey";
import { useMemo } from "react";

export const useGetMembersData = () => {
  return useQuery<memberType[], AxiosError>(
    [qvickQueryKey.member.getAll],
    async () => await memberRepositoryImpl.getMembers(),
    {
      staleTime: 30 * 1000,
      cacheTime: 60 * 1000,
    }
  );
};

export const useMembers = (checked?: boolean) => {
  const { data: allMembers, isLoading, error, refetch } = useGetMembersData();
  
  const members = useMemo(() => {
    if (!allMembers) return [];
    
    return checked === undefined 
      ? allMembers 
      : allMembers.filter(member => member.checked === checked);
  }, [allMembers, checked]);
  
  const stats = useMemo(() => {
    return {
      totalCount: allMembers?.length || 0,
      checkedCount: allMembers?.filter(member => member.checked).length || 0,
      uncheckedCount: allMembers?.filter(member => !member.checked).length || 0
    };
  }, [allMembers]);
  
  return {
    members,
    stats,
    isLoading,
    error,
    refetch
  };
};

export const useGetMembers = (checked?: boolean) => {
  const { members, isLoading, error, refetch } = useMembers(checked);
  return { data: members, isLoading, isError: error, refetch };
};