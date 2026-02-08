def SearchingChallenge(s):
    longest = ""

    def expand(l, r):
        while l >= 0 and r < len(s) and s[l] == s[r]:
            l -= 1
            r += 1
        return s[l+1:r]

    for i in range(len(s)):
        odd = expand(i, i)
        even = expand(i, i+1)

        if len(odd) > len(longest):
            longest = odd
        if len(even) > len(longest):
            longest = even

    return longest if len(longest) > 1 else "none"
